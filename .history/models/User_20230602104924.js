import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// import Schema
const { Schema } = mongoose

// User Schema with fields

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

//save gets called before create
  userSchema.pre('save', async function (next) {
    
// hash password for security 
    this.password = await bcrypt.hash(this.password, 10);

    next();
  });