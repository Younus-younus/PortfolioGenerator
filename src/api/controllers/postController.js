import express from 'express';
import multer from 'multer';

const app = express();
import { PrismaClient } from "@prisma/client";

const upload = multer({ dest: 'uploads/' }); // Configure multer to save files in the 'uploads' folder
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export const newPortfolio = async (req, res) => {
    const {
        name,
        describeYou,
        description,
        contact,
        gmail,
        address,
        course,
        institute,
        skill,
        interest,
        language,
    } = req.body;

    console.log("req.user:", req.user);
    const userId = req.user.userId;

    if (!userId) {
        console.error("User ID is missing or undefined");
        return res.status(401).json({ error: "Unauthorized: User ID is missing" });
    }

    const imageUrl = req.file?.path.replace(/\\/g, '/');
    const imageName = req.file?.filename;

    try {
        // Validate required fields
        if (!name || !description || !contact || !language || !describeYou) {
            return res.status(400).json({ error: "Please fill out all required fields." });
        }

        const skillsArray = skill ? skill.split(',').map((s) => s.trim()) : [];
        const languagesArray = language ? language.split(',').map((lang) => lang.trim()) : [];

        await prisma.portfolio.create({
            data: {
                name,
                describeYou,
                description,
                user: { connect: { id: userId } },
                contact: {
                    create: {
                        contact,
                        gmail,
                        address,
                    },
                },
                education: {
                    create: {
                        course,
                        institute,
                    },
                },
                skills: {
                    create: skillsArray.map((s) => ({ skill: s })),
                },
                interest: {
                    create: {
                        interest,
                    },
                },
                languages: {
                    create: languagesArray.map((lang) => ({ language: lang })),
                },
                images: imageUrl && imageName
                    ? {
                        create: {
                            imageUrl,
                            imageName,
                            user: { connect: { id: userId } },
                        },
                    }
                    : undefined,
            },
        });

        res.redirect('/');
        res.status(201).json({ message: "Portfolio created successfully" });
    } catch (err) {
        console.error("Error creating portfolio:", err.message || err);
        return res.status(500).json({ error: "Failed to create portfolio" });
    }
};




