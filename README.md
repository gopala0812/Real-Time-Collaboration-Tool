# 📝 EasyNote – Real-Time Collaborative Note-Taking Tool

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: GOPALA KRISHNA HK

*INTERN ID*: CT04DH300

*DOMAIN*: SOFTWARE DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTHOSH



EasyNote is a real-time collaborative note-taking web application designed to enable multiple users to co-edit shared notes simultaneously with live updates, synchronized typing, and rich formatting capabilities. It is a browser-based solution, requiring no installation or login — making it ideal for student teams, online study sessions, collaborative brainstorming, or remote work.

This project was built as part of a software development internship at CODTECH IT SOLUTIONS PVT. LTD. and focuses on delivering a real-time experience using modern web technologies such as Node.js, Express, Socket.IO, and Quill.js.

| Layer                      | Technologies Used                             |
| -------------------------- | --------------------------------------------- |
| **Frontend**               | HTML5, CSS3, JavaScript (Vanilla), Quill.js   |
| **Backend**                | Node.js, Express.js                           |
| **Realtime Communication** | Socket.IO                                     |
| **Document Editor**        | Quill.js (WYSIWYG editor)                     |
| **PDF Export**             | JavaScript window print for PDF rendering     |
| **Data Storage**           | In-memory JavaScript Object (no DB used)      |
| **Styling**                | Custom responsive CSS, Dark/Light mode toggle |
| **Hosting**                | Tested locally via Node/Express server        |

🔧 How It Works
When a user creates a note, the system generates a random 6-character Note ID and Password. These are stored in the server’s memory under a JavaScript object and shared with the client via Socket.IO.

A second user can join the same note by entering the Note ID and password. Once authenticated, they are allowed into the same "room" using socket.join() from Socket.IO.

The Quill rich text editor initializes a live document. As users type, the text-change event emits deltas over the socket, which are received by all connected users and updated instantly in their editors via updateContents.

The server maintains note content and active user lists per note session. Usernames are tracked via socket.id, allowing real-time broadcasting of join/leave events.

Notifications such as 🔔 John joined the note or 🚪 Maya left the note are pushed live to all clients and shown in a scrolling panel on the right.

Users can download the note as PDF using a custom JavaScript function that prints the inner HTML of the editor. This allows preservation of rich text formatting in offline formats.

A simple dark/light mode toggle switches themes on-the-fly. Special CSS rules ensure that the Quill toolbar and editor remain readable and usable in dark mode.

📦 Core Features
✅ Real-time collaborative editing
✅ Instant note creation and joining via ID + password
✅ Rich-text formatting with Quill.js
✅ User presence detection and notifications
✅ Clean three-panel layout: Info / Editor / Users
✅ PDF Export without any external library
✅ Light & Dark Theme toggle
✅ No login/signup, uses localStorage for session
✅ Optimized for both desktop and mobile screen sizes

🔐 Data Handling
No data is stored permanently. Everything is kept in server memory only for the duration of a session.

Users’ names, IDs, and passwords are stored in localStorage for navigation and rehydration within the session.

No sensitive data is handled or saved.

👨‍💻 Learning Outcomes
During the development of EasyNote, the following skills were put into practice:

Implementing WebSocket-based communication for real-time updates

Structuring Node.js + Express apps with public folders and routes

Handling client-server events with Socket.IO's full-duplex architecture

UI/UX design principles with responsive layout and modern CSS

Managing client-side state with localStorage

Building collaborative tools with minimal infrastructure

✅ Conclusion
EasyNote achieves the goal of providing a lightweight, real-time note collaboration platform with no barriers to entry. It combines powerful text-editing tools with live interaction, making it a great starting point for more advanced collaborative applications.

Whether used for a brainstorming session, remote study group, or even pair programming notes — EasyNote ensures clarity, speed, and ease of use.

# Output

![Image](https://github.com/user-attachments/assets/269b88a3-3408-436f-8f87-286b46f90679)
![Image](https://github.com/user-attachments/assets/f945239a-8528-4ca6-8b06-b9409ac46014)
![Image](https://github.com/user-attachments/assets/29925c62-dddb-4309-b483-bb871670e846)
![Image](https://github.com/user-attachments/assets/d271130a-f690-4267-9181-d104c13936ac)
![Image](https://github.com/user-attachments/assets/b5762b4e-6e10-4948-ad6c-ce5b7e605d53)
![Image](https://github.com/user-attachments/assets/09efc948-788d-48f4-a94b-e63c59b5244d)
