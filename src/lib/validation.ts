export type Member = {
    name: string;
    email: string;
    department: string;
    year: string;
    gender: "Male" | "Female" | "Other" | "";
    foodPreference: "Veg" | "Non-veg" | "";
    github: string;
};

export type Team = {
    teamName: string;
    teamLead: Member;
    members: Member[];
};

export const emptyMember: Member = {
    name: "",
    email: "",
    department: "",
    year: "",
    gender: "",
    foodPreference: "",
    github: "",
};

export const validateTeamStep = (step: number, team: Team): string => {
    if (step === 1 && !team.teamName.trim()) return "Team Name is required.";

    const checkGithub = (url: string) => url === "" || url.startsWith("https://github.com/");
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (step === 2) {
        if (!team.teamLead.name || !team.teamLead.email || !team.teamLead.department || !team.teamLead.year || !team.teamLead.gender || !team.teamLead.foodPreference || !team.teamLead.github) return "All fields are required.";
        if (!isValidEmail(team.teamLead.email)) return "Enter a valid team lead email.";
        if (!checkGithub(team.teamLead.github)) return "Invalid GitHub URL. Must start with https://github.com/";
    }

    if (step >= 3 && step <= 5) {
        const idx = step - 3;
        const m = team.members[idx];
        if (!m.name || !m.department || !m.year || !m.gender || !m.foodPreference || !m.github) return "All fields are required.";
        if (!checkGithub(m.github)) return "Invalid GitHub URL.";
    }

    if (step === 5 || step === 6) {
        const allMembers = [team.teamLead, ...team.members];
        const hasFemale = allMembers.some(m => m.gender === "Female");
        if (!hasFemale) return "At least one team member must be Female.";
    }

    return "";
};
