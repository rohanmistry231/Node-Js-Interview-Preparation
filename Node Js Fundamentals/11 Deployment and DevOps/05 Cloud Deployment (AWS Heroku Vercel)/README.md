# Main Learning Points: Cloud Deployment (AWS, Heroku, Vercel)

## Deploying to Heroku
1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Initialize a project with app.js and package.json
4. Create a Procfile:
   ```
   web: node app.js
   ```
5. Create a Heroku app: `heroku create my-node-app`
6. Deploy: `git push heroku main`
7. Open the app: `heroku open`

## Deploying to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Initialize a project with app.js and package.json
3. Add a `vercel.json` file:
   ```json
   {
       "version": 2,
       "builds": [{ "src": "app.js", "use": "@vercel/node" }],
       "routes": [{ "src": "/(.*)", "dest": "app.js" }]
   }
   ```
4. Deploy: `vercel --prod`
5. Access the deployed app via the provided URL

## Deploying to AWS (Elastic Beanstalk)
1. Install AWS CLI: `pip install awscli`
2. Configure AWS: `aws configure`
3. Initialize a project with app.js and package.json
4. Initialize Elastic Beanstalk: `eb init -p node.js my-node-app --region us-east-1`
5. Create an environment: `eb create my-node-env`
6. Deploy: `eb deploy`
7. Open the app: `eb open`

# Note: Deployment cannot be executed here as it requires cloud provider access.