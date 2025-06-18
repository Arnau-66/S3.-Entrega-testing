# 🎬 SPRINT 3 – Movie Data Processing with JavaScript & Jest

This repository is part of the IT Academy Bootcamp and corresponds to Sprint 3, focused on JavaScript array methods and unit testing with Jest.

## 🧰 Required Software

The following tools are necessary to run and complete the project:

- [Node.js](https://nodejs.org/)
- Jest (for automated testing)
- Jest HTML Reporter (to visualize test results in the browser)

Installation steps:

```
npm install
npm install --save-dev jest jest-html-reporter
```

## 🧪 Methodology

This sprint applies the principle of **"programming to satisfy tests"**, where each function is tested using the predefined test suite (`films.spec.js`). The goal is to pass all tests instead of printing output to the console.

Each function was implemented following the **Single Responsibility Principle**, and code readability has been prioritized.

## 🔀 Branch Workflow

This project follows a structured Git workflow using three branches:

- `main` – contains the final, stable version of the sprint
- `Developer` – used for active development and intermediate testing
- `Features` – used to implement and test individual exercises or modules before merging to `Developer`

## 💻 Technologies Used

- JavaScript (ES6)
- Node.js
- Jest for testing
- Git & GitHub for version control

## 📚 Exercises Overview

### ✅ Level 1 – Mandatory Exercises

1. `getAllDirectors(movies)` – Returns an array of all directors.
2. `getMoviesFromDirector(movies, director)` – Filters movies by a given director.
3. `moviesAverageOfDirector(movies, director)` – Returns the average score of a director’s films.
4. `orderAlphabetically(movies)` – Returns the first 20 movie titles sorted alphabetically.
5. `orderByYear(movies)` – Returns movies sorted by year and title.

### 🧩 Level 2 – Optional

6. `moviesAverageByCategory(movies, category)` – Calculates average score for a specific genre.

### 🚀 Level 3 – Optional

7. `hoursToMinutes(movies)` – Converts movie duration to total minutes.
8. `bestFilmOfYear(movies, year)` – Returns the highest-rated movie of a specific year.

---

All tests from the Jest suite have been successfully passed, including optional level 2 and level 3 exercises.
