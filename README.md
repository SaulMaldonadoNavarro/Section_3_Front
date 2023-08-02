# Remix the practical guide proyect

## Development

npm run dev

## Deployment

npm run build

npm start

## To start we need install the following dependences: 
    ### Icons:
        npm install react-icons --save
    
    ### Data base: 
        npm install mongodb
        npm install prisma --save-dev
        npx prisma init --datasource-provider [your database manager in this case is mongodb]

        The next step is insert the pirsma link inside the .env file generateb by prisma
        saul:password insert the password
        net/[insert the model name]?retryWrites

        Then we need to type:
        npx prisma generate

## Section 3 Chapter 63 if bug on de create section: 
    Add a new user in mongoDB dashboard 
    Give the atlas admion role
    Start again the server (both build and run)