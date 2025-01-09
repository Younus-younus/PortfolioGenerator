import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export const Portfolios = async (req, res) => {
    try {
        const portfolios = await prisma.portfolio.findMany({
            include: {
                images: { take: 1 },
                _count: { select: { likes: true } },
            },
        });

        const portfolioData = portfolios.map((portfolio) => ({
            ...portfolio,
            image_url: portfolio.images?.[0]?.imageUrl,
            like_count: portfolio._count.likes,
            describeYou: portfolio.describeYou,
        }));

        res.setHeader('Content-Type', 'application/json');
        res.json({ portfolios: portfolioData });
    } catch (error) {
        console.error('Error fetching portfolios:', error.message, error.stack);
        res.status(500).json({ error: 'Error fetching portfolios.' });
    }
};

export const show = async (req, res) => {
    const { id } = req.params;
    const parsedId = id;

    if (!parsedId) {
        return res.status(400).json({ error: 'Invalid portfolio ID' });
    }

    try {
        const portfolio = await prisma.portfolio.findUnique({
            where: { id: parsedId },
            include: {
                contact: true,
                education: true,
                skills: true,
                interest: true,
                languages: true,
                images: true,
            },
        });

        if (!portfolio) {
            return res.status(404).json({ error: 'Portfolio not found' });
        }

        const userId = req.user?.id || null;
        const hasLiked = userId
            ? await prisma.like.findFirst({
                where: { userId, portfolioId: parsedId },
            })
            : null;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            portfolio,
            contact: portfolio.contact,
            education: portfolio.education,
            skills: portfolio.skills,
            interests: portfolio.interest,
            languages: portfolio.languages,
            images: portfolio.images,
            hasLiked: !!hasLiked,
        });
        
    } catch (error) {
        console.error('Error fetching portfolio:', {
            error: error.message,
            stack: error.stack,
            portfolioId: parsedId,
        });
        res.status(500).json({ error: `Error fetching portfolio: ${error.message}` });
    }
};
