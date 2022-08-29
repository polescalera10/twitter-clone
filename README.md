# Twitter Clone

This is a Full Stack App using NextJS (React JS), TailwindCSS for styling, Express (Node JS) for backend and SanityCMS for database.

Clone of Twitter with functionalities as:
- Post Tweet
- Add Picture
- Authentification
- Comment on Tweets
- Get feed of tweets

You can see a live example [here](https://twitter-clone-polescalera.vercel.app/)

## Install and run

If you want you can download/clone this repo and `yarn install` all dependencies.

WARN: notice there is a "sanity-twitter-clone", you'll need to `cd` into that folder and also `yarn install` as it has its own dependencies.

### env variables

Running this app locally will need a .env.local file with this variables:

- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_BASE_URL
- TWITTER_CLIENT_ID
- TWITTER_CLIENT_SECRET
- NEXTAUTH_SECRET
- NEXTAUTH_URL
- SANITY_API_TOKEN

You will need to sing in on SanityCMS and Twitter Devs to get those and configure the API Keys.

### Sanity CMS

Sanity CMS is a content manamgement system that allows to store data and retrieve it. It works similar to GraphQl and MongoDB. Though it has it's own language GROQ to get and manage API calls.

# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
