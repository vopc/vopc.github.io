# VOPC - 溫哥華愛樂合唱團 Website

This is the official website for the 溫哥華愛樂合唱團 (Vancouver Oratorio Philharmonic Choir - VOPC). The site is built using Jekyll and is designed to be a central hub for information about the choir, including events, activities, and how to join.

**Live Site:** [https://vopc.ca](https://vopc.ca)

## ✨ Features

- **Responsive Design**: Fully responsive layout for optimal viewing on desktops, tablets, and mobile devices.
- **Jekyll Powered**: A static site generated with Jekyll, making it fast, secure, and easy to maintain.
- **Dynamic Content Sections**:
  - **About Us**: Information about the choir's history and achievements.
  - **Our Activities**: Overview of regular practices, training, and performances.
  - **Upcoming Events**: A list of future concerts and events with modal pop-ups for posters.
  - **Photo Gallery**: A dynamically generated gallery of past performances and moments.
  - **Contact/Join Us**: Information on how to get in touch or join the choir.
- **Interactive Components**:
  - Image slider using [Glide.js](https://glidejs.com/).
  - Modals for event posters and an expanded gallery view.

## 🛠️ Built With

- [Jekyll](https://jekyllrb.com/) - Static site generator
- HTML5 & CSS3
- JavaScript (ES6+)
- [Glide.js](https://glidejs.com/) - for the image carousel
- [Font Awesome](https://fontawesome.com/) - for icons

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have the following installed on your machine:
- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (version as specified in `.ruby-version` if present)
- Bundler

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/vopc/vopc.github.io.git
    cd vopc.github.io
    ```

2.  **Install Ruby dependencies using Bundler:**
    ```sh
    bundle install
    ```

### Running the Development Server

Run the following command to start the Jekyll server. The site will be available at `http://localhost:4000`.

```sh
bundle exec jekyll serve --livereload
```

The `--livereload` flag will automatically refresh the page when you make changes to the source files.

## 📂 Project Structure

```
├── _layouts/         # Page layouts
├── assets/           # CSS, JS, images, and other assets
│   ├── css/
│   ├── js/
│   ├── images/
│   └── vendor/
├── _config.yml       # Jekyll configuration
├── index.md          # Main page content
└── README.md         # This file
```

- **`_layouts/`**: Contains the HTML structure for pages. `default.html` is the main template.
- **`assets/`**: All static assets. The `vendor` directory contains third-party libraries like Glide.js.
- **`_config.yml`**: Site-wide configuration, including the site title, description, and Jekyll plugins.
- **`index.md`**: The Markdown content for the single-page layout.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## 📧 Contact

Vancouver Oratorio Philharmonic Choir
- **Email**: vopcca@gmail.com
- **Website**: vopc.ca
