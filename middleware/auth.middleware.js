import { getAuth } from "@clerk/clerk-sdk-node";

export const protectRoute = (req, res, next) => {
    const { userId } = getAuth(req);

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized - you must be logged in" });
    }

    next();
};
