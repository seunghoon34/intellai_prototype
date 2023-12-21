import { ClerkProvider } from "@clerk/nextjs";

const PlatformLayout = ({
    children
}:{
    children: React.ReactNode;
}) =>{
    return(
        <ClerkProvider>
            <div className="w-screen h-full">{children}</div>
        </ClerkProvider>
    );
};

export default PlatformLayout;