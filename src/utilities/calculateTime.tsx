import { Status } from "../components/modal"

type calculateTimeProps = {
    deadline:Date,
    setState: (value: string) => void
    setStatus: (value: Status) => void
}

export default function calculateTime({setState, deadline, setStatus}: calculateTimeProps): void{
    let date: Date = new Date()
    let days: number = Math.floor((deadline.getTime() - date.getTime())/(1000 * 3600 * 24))
    let hours: number = Math.floor((deadline.getTime() - date.getTime())/(1000 * 3600)) - (days*24)
    let minutes: number = Math.floor((deadline.getTime() - date.getTime())/(1000 * 60)) - (days*24*60 + hours*60)

    if(days > 0) setState(`Over ${days} days left`)
    else if(days === 0 && hours > 0) setState(`Over ${hours} hours left`)
    else if(days === 0 && hours === 0 && minutes > 0) setState(`Over ${minutes} minutes left`)
    else {
        setState("You've missed it.")
        setStatus(Status.failed)
    }
}