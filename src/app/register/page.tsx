import Registration from "@/components/Registration";

export const metadata = {
    title: "Register | Hack Europa 2.0",
    description: "Register your team of 4 for the ultimate Hack Europa 2.0 hackathon.",
};

export default function RegisterPage() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Registration />
        </div>
    );
}
