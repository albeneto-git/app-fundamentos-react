import { useEffect, useMemo, useState } from "react";

// exercício 1
const UserInfo = ({userInfo}) => {
    
    useEffect(()=>{

        document.title = `${userInfo.name} - ${userInfo.title}`

    },[userInfo]);
    
    return (
        <div>
                <h1>Nome: {userInfo.name}</h1>
                <p>Profissão: {userInfo.title}</p>
        </div>
    );
};

// exercício 2
const fibonacci = (n) => {
    if(n <= 1) {
        return n;
    }
    return (fibonacci(n - 1) + fibonacci(n - 2));
};

const FibCalculator = ({num}) => {
    const fibResult = useMemo(() => fibonacci(num), [num]);

    return (
        <div>
            <p>Fibonacci de {num} é {fibResult}</p>
        </div>
    );
};

// exercício 3

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // limpeza
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);
    return isOnline;
};

const OnlineStatusIndicator = () => {
    const isOnline = useOnlineStatus();

    return (
        <div>
            <p>Você está atualmente {isOnline ? "Online" : "Offline"}</p>
        </div>
    );
};


const ExercisesHooks = () => {

    const userInfo = { name: "Alice", title: "Desenvolvedora" };

    return (
        <div>
            <h2>Exercício 1</h2>
            <UserInfo userInfo={userInfo} />
            <h2>Exercício 2</h2>
            <FibCalculator num={10} />
            <h2>Exercício 3</h2>
            <OnlineStatusIndicator />
        </div>
    );
};

export default ExercisesHooks;