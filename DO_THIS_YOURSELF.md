# The parts you need to do yourself

The source code is already written. Work through this list in order.

## A. One-time setup
1. On your computer, download and install **Node.js LTS** from https://nodejs.org/.
2. Install **Visual Studio Code** from https://code.visualstudio.com/ if you do not already have it.
3. Download and extract `TaskFlow-React-Mini-Project.zip`.
4. In VS Code, choose **File → Open Folder** and select the extracted `TaskFlow-React-Mini-Project` folder.

## B. Run the backend
1. In VS Code, choose **Terminal → New Terminal**.
2. Type `cd backend` and press Enter.
3. Type `npm install` and press Enter. Wait until it finishes.
4. Type `npm start` and press Enter.
5. Leave this terminal open. You should see `TaskFlow API running at http://localhost:5000`.

## C. Run the frontend
1. Open a second terminal using **Terminal → New Terminal**. Do not stop the backend terminal.
2. Type `cd frontend` and press Enter.
3. Type `npm install` and press Enter. Wait until it finishes.
4. Type `npm run dev` and press Enter.
5. The terminal will print a local address, usually `http://localhost:5173`.
6. Hold Ctrl (Windows/Linux) or Cmd (Mac) and click that address, or copy it into Chrome.

## D. Test it
1. Confirm that sample tasks and statistics appear.
2. Add a task, e.g. `Finish CS3301 report`, with High priority.
3. Complete a task with the checkbox.
4. Delete a task using the × button.
5. Search for a task title.
6. Test the Pending and Completed status filters.
7. Test the High, Medium and Low priority filter.
8. Click About, then Dashboard.
9. Resize the browser to check mobile responsiveness.
10. If tasks do not load, confirm both terminals are still running. The backend must be on port 5000.

## E. Capture your own evidence
Use your computer's screenshot shortcut or Snipping Tool. Capture:
- Dashboard with statistics and tasks
- Add-task form with a newly added task
- Priority filter in use
- A completed task and updated statistics
- About page
- Backend terminal showing the server is running

Do not use sample/stock images as evidence of your app. Use your own running application.

## F. Tutorial, approval, identity and GitHub
These require your own actions:
1. Open the tutorial URL recorded in `PROJECT_REPORT_TEMPLATE.md`, verify it is the tutorial you choose, and watch the relevant sections. If it is unsuitable or unavailable, choose a suitable educational React project tutorial on YouTube and update the report.
2. If your instructor requires project approval before implementation, submit the actual tutorial title and URL for approval.
3. Enter your name and USN in the report.
4. Upload the project to your GitHub account. Follow the GitHub repository page's instructions for pushing an existing project. Do not share your password or access token.
5. Replace the GitHub placeholder in the report with your real repository URL.
6. Insert the screenshots and write the challenges you actually faced.
7. Read the code and practise explaining it. Do not claim to have watched, tested, or implemented something unless you have.

## Important
The backend stores tasks in memory only. Restarting the backend resets the task list. This is intentional to keep the assignment setup simple.
