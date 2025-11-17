import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function ProjectCard() {
    return (
        <Card className="w-100">
            <CardHeader>
                <CardTitle>Project Name</CardTitle>
                <CardDescription>Project description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Project content</p>
            </CardContent>
        </Card>
    )
}