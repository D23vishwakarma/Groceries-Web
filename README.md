# 🛒 DailyBasket — Grocery E-Commerce App

A fully responsive grocery shopping web app built with **React**, **Vite**, and **Tailwind CSS**. Features a complete cart system, persistent storage, and a clean modern UI.

🔗 **Live Demo**: [groceries-web-topaz.vercel.app](https://groceries-web-topaz.vercel.app)
📁 **Repository**: [github.com/D23vishwakarma/Groceries-Web](https://github.com/D23vishwakarma/Groceries-Web)

---

## ✨ Features

- 🏠 **Home Page** — Hero section, featured categories, and product highlights
- 🛍️ **Product Browsing** — Browse grocery items across multiple categories
- 🛒 **Cart System** — Add, remove, and update item quantities in real time
- 💾 **Persistent Cart** — Cart data saved in `localStorage` across sessions
- 📦 **State Management** — Global cart state using React Context API + `useReducer`
- 📄 **About / Process / Contact Pages** — Fully built-out informational sections
- ⚡ **Performance Optimized** — Lazy loading, WebP image format, code splitting
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Context API | Global state management |
| useReducer | Cart state logic |
| localStorage | Cart persistence |
| Vercel | Deployment |

---

## 📂 Project Structure

```
Groceries-Web/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # Cart Context & Reducer
│   ├── pages/           # Page components (Home, About, Contact, etc.)
│   ├── assets/          # Images & icons
│   └── App.jsx          # Root component with routing
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/D23vishwakarma/Groceries-Web.git

# Navigate to the project directory
cd Groceries-Web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. Any push to the `main` branch triggers an automatic production deployment.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://groceries-web-topaz.vercel.app)

---


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a [GitHub Issue](https://github.com/D23vishwakarma/Groceries-Web/issues) or submit a pull request.

---

## 👨‍💻 Author

**Divyansh Vishwakarma**
B.Tech CSE @ MMMUT Gorakhpur (2023–2027)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/divyansh-vishwakarma-89861a298)
[![GitHub](https://img.shields.io/badge/GitHub-D23vishwakarma-black?style=flat&logo=github)](https://github.com/D23vishwakarma)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
