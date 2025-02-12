import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const users = []

const userExists = (username) => {
    return users.filter((user) => user.username === username).length == 1;
}

app.get('/users', (req, res) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) return res.status(500).json({
        success: false,
        message: "No headers attached"
    })

    const token = authHeader.split(" ")[1];
    try {
        const isVerified = jwt.verify(token, 'harsh-harsh');
        if (isVerified) {
            res.status(202).json({
                success: true,
                users
            });
        } else{
            res.status(403).json({
                success: false,
                message: "Unverified Token"
            })
        }
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Unverified Token"
        })
    }
})

app.post('/signin', async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Please enter username and password"
        });
    }
    if (userExists(username)) {
        return res.status(500).json({
            success: false,
            comment: "User alredy exists"
        });
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({
        username: username,
    }, 'harsh-harsh', {expiresIn: "2d"});
    users.push({
        username: username,
        password: hashedPassword,
        token: token
    });
    return res.status(200).json({
        success: true, token
    });
})

app.listen(PORT, () => {
    console.log(`Server RUNNING at PORT ${PORT}`);    
})