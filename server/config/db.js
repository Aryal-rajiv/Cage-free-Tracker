const mongooose =require('mongoose');

const connectDB = async () => {
  try{
    await mongooose.connect(process.env.Mongo_URI);
    console.log('Database connected succefully');
  } catch (err){
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;