# Dragon Quest Monsters Database ReactJS Frontend

## Description

This project is the ReactJS frontend to the deployed FastAPI project, [DQMonstersDB-API](https://github.com/cmsato09/DQMonstersDB-API). 
It displays game information such as the beastiary, skill catalogue, and item list to help you on your quest in
[Dragon Quest Monsters: Terry's Wonderland Retro](https://dragon-quest.org/wiki/Dragon_Quest_Monsters:_Terry's_Wonderland_RETRO).

It is based on a prototype I previously developed using [Streamlit](https://streamlit.io/)
(see the [DQMonstersDB-streamlit](https://github.com/cmsato09/DQMonstersDB-streamlit) project).

[Insert picture of ReactJS frontend]: #

## Install and Run Locally

Follow these steps to set up and run the project on your local machine. 

### Prerequisites

Make sure to have Node.js, package manager (npm or yarn), and Git installed. 

### Install and Run this Project

1. Clone this repository and navigate to the project directory.
2. Install dependencies.
3. Run the app in development mode.
4. Open http://localhost:3000 to view it in your browser.

```shell
git clone https://github.com/cmsato09/DQMonstersDB-React.git

npm install
# or yarn install

npm start
# or yarn start
```

### Run both ReactJS and FastAPI locally

Follow the [DQMonstersDB-API "How to Run Locally"](https://github.com/cmsato09/DQMonstersDB-API?tab=readme-ov-file#how-to-run-locally)
section. 

Clone the repo, install the dependencies on a virtual environment, create the sqlite database, and run the main.py file. 
The FastAPI project should be running on http://localhost:8000.

Follow this project's "installation and run" section shown above. Before running the app in development mode,
change the `baseURL` in apiClient.js file to http://localhost:8000. 

## Technologies Used
This project was built with [ReactJS](https://react.dev/), [Radix UI](https://www.radix-ui.com/), and [Tailwind CSS](https://tailwindcss.com/)
to createa modern and responsive web application.

It is an extension of the Minimal Viable Product (MVP) developed on Streamlit.

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project as long as proper attribution is given. See the `LICENSE` file for more details.
