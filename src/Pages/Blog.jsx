const Blog = () => {
    return (
        <div className="myContainer">
            <h1 className='text-4xl  text-secondary tracking-wide  pt-12 mb-12 text-center font-bold'>Question & Answers</h1>
            <div className='mx-6 my-10 '>
                <div className='mb-4'>
                    <p className='font-bold text-xl'>Q-1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className='mt-2'>Ans.Access token is used to make secure call to API. When user logs in authentication servers issues a token with which client can get access to the api. Access token can expires with time.Access token is a bearer token those who holds it can use it.</p>
                    <p>Refresh token is the credential artifact that lets client application to get new access token without asking the user to login again.As access token expires in a short time for security purpose.The refresh token is used to renew it.</p>
                    <p>These tokens an be stored in both local storage and https only cookies.But storing it in local storage is dangerous.Storing in https only cookie is not totally risk free but it is more secure than local storage. </p>
                </div>
                <div className='mb-4'>
                    <p className='font-bold text-xl'>Q-2. Compare SQL and NoSQL databases?</p>
                    <p className='mt-2'>Ans. SQL is relational database management system with fixed and static schema.It is good for complex queries but not suited for hierarchical data storage.</p>
                    
                    <p className='mt-2'>MoSQL is non relational or distributed database management system with dynamic schema. It is suited for hierarchical data storage but not good for complex queries.</p>
                    <p className='mt-2'>SQL is a good choice when working with related data. Relational databases are efficient, flexible, and easily accessed by any application. A benefit of a relational database is that when one user updates a specific record, every instance of the database automatically refreshes, and that information is provided in real-time.While NoSQL is good when the availability of big data is more crucial, SQL is valued for ensuring data validity.NoSQL is also a wise choice when dealing with large or constantly changing data sets, flexible data models, or requirements that do not fit into a relational model. </p>


                       

                </div>
                <div className='mb-4'>
                    <p className='font-bold text-xl'>Q-3. What is express js? What is Nest JS?</p>
                    <p className='mt-2'>Express js is a runtime environment. Express js is a frame work.It is  a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.</p>
                    <p>Nest js is also a node.js frame work based on typescript an d javascript.everything in express js is in nest.js. express is good for light applications but whet code gets complex and messier nest is good.Node has dependency injection and exception handling feature.</p>
                </div>
                <div className='mb-4'>
                    <p className='font-bold text-xl'>Q-4. What is MongoDB aggregate and how does it work?</p>
                    <p className='mt-2'>Aggregations is done by processing a large number of documents in a collection. I uses stages which are part of a pipeline. By passing the data through these stages documents can be filtered,modified or reshapes.</p>
                    <p>If you want to retrieve data from the database you must execute an operation known as a query. However, queries only return the data that already exists in the database. In order to analyze  data to find patterns or other information about the data — rather than the data itself aggregation is often needed .</p>
                    <p>MongoDB enables you to perform aggregation operations through the mechanism called aggregation pipelines. These are built as a sequential series of data processing operations known as stages. Each stage inspects and transforms the documents as they pass through the pipeline. Documents from a chosen collection enter the pipeline and go through each stage, where the output coming from one stage forms the input for the next one and the final result comes at the end of the pipeline.</p>

                </div>
                

            </div>
 
        </div>
    );
};

export default Blog;