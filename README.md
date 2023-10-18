# Wiremap [![Netlify Status](https://api.netlify.com/api/v1/badges/28019c7f-f0ff-4902-8f9c-8a908ebacd22/deploy-status)](https://app.netlify.com/sites/wiremap/deploys)

Quickly and easily visualise your application sitemap structure with a comprehensive & user-friendly interface, combined with a range of useful features, to help facilitate a rapid streamlined development process.

![Thumbnail](/public/images/thumb-min.png)

## Technologies

- [Next.js](http://next.js/)
- [Tailwinds](http://tailwinds.com/)
- [TypeScript](http://typejs.org/)
- [Markdown](http://markdown.org/)
- [MongoDB](http://mongodb.org/)

## Application Structure

```mermaid
    flowchart TD
    35a89d93(Landing Page)-->46223490(Dashboard)
    46223490-->86r53891(Editor Page)
    35a89d93-->03dcc596(Static Page)
    03dcc596-->03dmm596(Privacy/Terms/Features)
    35a89d93-->T(Pricing)
    eb8f8865(Additional Pages)
    eb8f8865-->84c323c4L(User Settings)
    eb8f8865-->f88d271e(404)
```

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/wiremapp/app.git
    ```

2. Install the dependencies:

    ```bash
    npm i
    # or
    yarn
    ```

3. Copy the `env.example` to a new file `env.local`:

    ```bash
    cp .env.example .env.local
    ```

    env.example:

    ```js
    NODE_ENV=
    NEXT_PUBLIC_STATIC_TITLE="An open-source sitemap visualiser"
    NEXT_PUBLIC_APP_TITLE="wiremap"
    NEXT_PUBLIC_SITE_URL="https://wirem.app/"
    NEXT_PUBLIC_GA_MEASUREMENT_ID=
    NEXTAUTH_URL="http://localhost:3000/"
    GOOGLE_ID=
    GOOGLE_SECRET=
    NEXTAUTH_SECRET=
    MONGODB_URI="mongodb://localhost:27017/db_name"
    EMAIL_SERVER_USER="noreply@wirem.app"
    EMAIL_SERVER_PASSWORD=
    EMAIL_SERVER_HOST=
    EMAIL_SERVER_PORT=465
    EMAIL_FROM=
    GITHUB_ID=
    GITHUB_SECRET=
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
    STRIPE_SECRET_KEY=
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [React documentation](https://reactjs.org/).

## License

This repository is open source. However, please note that no license file is included. As a result, the use of this repository or any of its material for any purpose beyond personal or educational use is not authorised.
