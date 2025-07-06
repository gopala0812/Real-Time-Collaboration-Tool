const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

const notes = {}; // noteId: { password, content, users: {} }

io.on("connection", (socket) => {

  // When host creates a note
  socket.on("create-note", (name) => {
    const noteId = uuidv4().slice(0, 6);
    const password = Math.random().toString(36).slice(2, 8); // 6-char password
    notes[noteId] = { password, content: "", users: {} };
    socket.emit("note-created", { noteId, password });
  });

  // When user joins a note
  socket.on("join-note", ({ noteId, password, name }) => {
    const note = notes[noteId];

    if (!note || note.password !== password) {
      socket.emit("error", "Invalid note ID or password");
      return;
    }

    socket.join(noteId);
    notes[noteId].users[socket.id] = name;

    socket.noteId = noteId;
    socket.userName = name;

    socket.to(noteId).emit("notification", `🔔 ${name} joined the note`);
    socket.emit("load-note", { content: note.content });

    io.to(noteId).emit("update-users", notes[noteId].users);
  });

  // When user types
  socket.on("update-note", ({ noteId, delta }) => {
  if (notes[noteId]) {
    socket.to(noteId).emit("receive-update", delta);
  }
});


  // When user leaves
  socket.on("disconnect", () => {
    const noteId = socket.noteId;
    const name = socket.userName;

    if (noteId && notes[noteId]?.users[socket.id]) {
      delete notes[noteId].users[socket.id];
      socket.to(noteId).emit("notification", `🚪 ${name} left the note`);
      io.to(noteId).emit("update-users", notes[noteId].users);
    }
  });
});

server.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
