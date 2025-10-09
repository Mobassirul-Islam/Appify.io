# 🌐 APPIFY.IO

> **A Modern, Single Page React Application for App Installation**

APPIFY.IO is a **fully responsive**, **user-friendly**, and **visually appealing** single-page React application built for seamless app browsing and installation. Designed with attention to UI/UX, it offers smooth navigation, clean layouts, and interactive features — all optimized for mobile and desktop devices.

---

## 🚀 Features Overview

### 🧭 Header
- **Logo** – Navigates to the home page when clicked.  
- **Navigation Bar** – Includes links: `Home`, `Apps`, `Installation` with **active route indication**.  
- **Contribution Button** – Redirects to our **GitHub profile** for collaboration.

---

### 🏠 Home Page

#### 🎯 Banner Section
- Center-aligned **heading**, **text**, and **two CTA buttons**:  
  - **App Store** → Redirects to the App Store.  
  - **Play Store** → Redirects to the Play Store.

#### 📊 States Section
- Displays **three informative state cards** representing key metrics.

#### 🌟 Top Apps Section
- Showcases **eight apps** in a clean **four-column layout**.
- Each app card includes:
  - App **title**  
  - **Image**  
  - **Download count**  
  - **Average rating**
- Clicking an app card navigates to its **App Details** page.
- A **“Show All”** button redirects to the **All Apps** page.

---

### 📱 All Apps Page

#### 🧾 Title Section
- Includes a **main title** and **subtitle** for context.

#### 🔍 Search & States
- Displays total app count on the left.
- Includes a **live search bar** on the right:
  - Filters apps **by title** (case-insensitive).  
  - Displays **“No App Found”** if no results match.

#### 🗂️ App Section
- Renders **all apps** dynamically from **12 fake JSON data files** in the public folder.
- Each app card shows:
  - **Title**
  - **Image**
  - **Downloads**
  - **Average rating**
- Clicking an app navigates to its **App Details page**.

---

### 🧩 App Details Page

#### ℹ️ App Information
- Displays:
  - App **image** (left side)
  - App **title**, **rating**, **downloads**, and **reviews**
- **Install Button**:
  - On click → becomes **disabled** with text “Installed”.
  - Shows a **success toast** notification.
  - Stores installation info in **LocalStorage**.

#### 📈 Review Chart
- A **responsive review chart** built using **Recharts**.
- Visualizes user ratings interactively.

#### 📝 Description Section
- Displays detailed **app description** and related content.

---

### ⚠️ Error Page & Other Enhancements

- Custom **error page** for invalid routes.  
- **Loading animations** for:
  - Page navigation
  - Search operations
- **Not Found messages** for missing data or invalid details.
- Supports **route reload** without breaking the app (deployment safe).

---

### 💾 LocalStorage Features

#### 📲 App Installation
- Clicking “Install”:
  - Saves app to **localStorage**.
  - If already installed → button is **disabled** and shows “Installed”.

#### 🧹 My Installation Page
- Displays **all installed apps** as cards.
- Each card has an **Uninstall button**:
  - Removes app from **UI and localStorage**.
  - Shows a **toast message** confirming the uninstall.

---

### 🔽 Sort by Downloads
- Includes a **dropdown** for sorting apps by downloads:
  - **Low → High**: Ascending order  
  - **High → Low**: Descending order

---

### 🦶 Footer
- A simple yet **beautiful footer** to wrap up the design elegantly.

---

## 🧠 Technologies Used

| Category | Tools & Libraries |
|-----------|------------------|
| **Frontend** | HTML, CSS, TailwindCSS, DaisyUI |
| **Framework** | React |
| **Routing** | React Router |
| **Notifications** | React Toastify |
| **Charts** | Recharts |
| **Design** | Figma |
| **Version Control** | Git, GitHub |

---

## 📂 Project Structure

