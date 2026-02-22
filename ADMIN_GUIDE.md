# Bingo Admin Guide

This guide is for event organizers and administrators to help manage the Bingo event using the Admin Dashboard and Settings panel.

## Accessing the Admin Panel

You can access the admin panel by navigating to `admin.html` in your browser. From the main player dashboard (`index.html`), you can also click the "Settings" gear icon and look for an "Admin" link if enabled, or simply append `admin.html` to your URL.

## The Admin Dashboard

The Admin Dashboard (`admin.html`) provides a high-level overview of the entire event.

### 1. Event Settings & Overview
A collapsible section at the top that displays the current configuration loaded from your CSV or local settings:
*   **Event Name & Codeword**: Basic event identity.
*   **Format & Size**: The game mode (e.g., Clan vs. Clan, Blackout) and grid dimensions (e.g., 5x5, 7x7).
*   **Team Count**: Number of active teams.
*   **Bonuses**: Points awarded for completing Rows, Columns, or Diagonals.
*   **CSV URL**: The source of all game data.

### 2. Points Leaderboard
A real-time ranking of all teams based on their total points.
*   Points include tile values + bingo bonuses.
*   Top 3 teams are highlighted with medals (🥇, 🥈, 🥉).

### 3. Tile Statistics
Insights into how the event is progressing:
*   **Easiest Tiles**: The top 5 most completed tiles across all teams.
*   **Hardest Tiles**: The top 5 least completed tiles (often those with 0 completions).

### 4. Recent Updates
A live feed showing the latest activity.
*   Updates automatically when a team completes a tile.
*   Shows the time, team name, and the specific tile completed.

### 5. Team Boards
A grid of mini-boards for every team.
*   Allows you to see the visual state of every team's board at a glance.
*   Clicking a team's card will take you to their specific player view (`index.html?team=TeamX`).

## Settings & Configuration

The Settings page (`settings.html`) is where you configure the event parameters.

### Event Details
*   **Event Name**: The title displayed at the top of the page.
*   **Codeword**: The secret code players can reveal.
*   **Event Description**: A message shown to players (e.g., rules, discord links).
*   **Format / Board Size / Team Count**: Structural settings for the bingo grid.

### Data Source (Crucial)
*   **CSV Data URL**: This is the most important setting. It must point to a published Google Sheet (CSV format) or a raw CSV file.
    *   The app reads this CSV to populate tiles, check progress, and calculate scores.
    *   All teams usually share the same CSV URL, but the app filters data based on columns.

### Security
*   **Require Team Passcodes**: If enabled, players must enter a passcode to view a specific team's board.
*   **Team Passcodes**: You can set individual passcodes for each team here.

### Theme Editor
*   **Custom Themes**: You can create, edit, and delete custom color themes for the dashboard.
*   **Import/Export**: Share themes with others by exporting them to JSON.

### Share Settings (config.json)
*   **Download config.json**: Once you have configured the event (Name, CSV URL, Teams, etc.), click this to download a `config.json` file.
*   **Deployment**: Upload this `config.json` to the root folder of your website. When players visit the site, it will automatically load these settings, ensuring everyone is looking at the correct event data without needing to manually enter the CSV URL.

## Gains Tracker

The Gains page (`gains.html`) allows you to compare two snapshots of player data (e.g., start of event vs. end of event) to calculate XP gained or Boss KC achieved.
*   This page is useful for verifying progress or running side-competitions (e.g., "Most XP gained").
*   It parses standard Wise Old Man or CML CSV exports.

---

### Quick Setup Checklist
1.  Create your Google Sheet with the required layout.
2.  Publish the sheet to CSV.
3.  Go to `settings.html` and paste the CSV URL.
4.  Click "Load Settings from CSV" or manually enter Event Name/Description.
5.  Download `config.json` and upload it to your web server.