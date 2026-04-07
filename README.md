<h1>Terminal Task Timer (Day 1) </h1>

<p>A lightweight, dependency-free CLI tool built with Node.js to track time spent on specific tasks. This project is part of my 30-Day Project Challenge to sharpen my JavaScript and backend logic skills.</p>

<h2>Overview</h2>

<p>The Terminal Task Timer allows you to start a stopwatch directly from your command line. It captures the task name, calculates the duration of your work session, and persists the data into a local tasks.json file for future review.</p>

<h3> <ins> Key Features:</ins></h3>

Interactive CLI: Uses the Node.js readline module for a seamless start/stop experience.

Data Persistence: Automatically manages a tasks.json file to store your session history.

Clean UI: Provides a formatted session summary box upon completion.

Zero Dependencies: Built entirely using Node.js core modules (fs, path, readline).

<h2>Installation & Setup</h2>

1. Clone the repository:

<pre>
git clone https://github.com/Basliel-Sisay/Terminal-task-timer.git
  
cd terminal-task-timer
</pre>

2. Initialize the project:

   <pre>
     npm install
   </pre>

<h2>How to Use</h2>

Simply run the start script and follow the prompts:

<pre>
  npm start
</pre>

Enter Task Name: When prompted, type what you are working on.

Start Working: The timer begins the moment you hit Enter.

Stop Timer: When you are finished, hit Enter again.

View Results: A summary box will appear, and your data will be saved to tasks.json.

<h2>Data Structure</h2>

The sessions are saved in the following JSON format:

<pre>
  [
  {
    "task": "Coding Day 1 Challenge",
    "duration": 45,
    "date": "2026-04-07T06:45:00.000Z"
  }
]
</pre>

<h2>Output</h2>

![Session Summary](<Screenshot 2026-04-07 071600.png>)

<h2>What I Learned Today</h2>

Asynchronous Flow: Handling nested callbacks and event listeners in Node.js.

File System (fs): Implementing the "Read-Modify-Write" cycle to update local JSON databases.

CLI Design: Creating a structured user interface using standard output and string formatting.
