import clerk from "@clerk/clerk-sdk-node";

const protectRoute = (req, res, next) => {
    const { userId } = clerk.getAuth(req);

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized - you must be logged in" });
    }

    next();
};

export { protectRoute };
