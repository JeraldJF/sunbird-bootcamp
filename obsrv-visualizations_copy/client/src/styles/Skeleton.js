import { Box, Skeleton } from "@mui/material";

const SkeletonComp = () => {
    return <>
        <Box sx={{ pt: 0.5 }}>
            <Skeleton my={1} />
            <Skeleton my={1} />
            <Skeleton my={1} />
            <Skeleton my={1} />
            <Skeleton my={1} width="60%" />
            <Skeleton my={1} width="60%" />
        </Box>
    </>
}

export default SkeletonComp;