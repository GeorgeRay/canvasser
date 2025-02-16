## Getting Started
### Check if Node.js is installed: 
> Run this command in Command Prompt (Windows) / Terminal (Linux):
> ```
> node -v
> ```
> If outputs is similar to this:
>> ```
>> 'node' is not recognized as an internal or external command, operable program or batch file.
>> ```
>> Download Node.js from [nodejs.org/en/download](https://nodejs.org/en/download)
> ### Open package.json in VSC
### If you are using Node 17+:
> #### Windows:
>> Update the package.json file to use a legacy openssl format.
>> Replace:
>> ```
>> "dev": "next dev",
>> ```
>> with:
>> ```
>> "dev": "set NODE_OPTIONS=--openssl-legacy-provider && next dev",
>> ```
> #### Linux:
>> Update the package.json file to use a legacy openssl format.
>> Replace:
>> ```
>> "dev": "next dev",
>> ```
>> with:
>> ```
>> "dev": "export NODE_OPTIONS=--openssl-legacy-provider && next dev",
>> ```

Open Visual Studio Code's integrated terminal:
+ Right-click package.json file and select *open in integrated terminal*.
+ Or use the keyboard shortcut *Cntrl + ` (backtick)*.

Update the Node Module:
```
npm install
```
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
