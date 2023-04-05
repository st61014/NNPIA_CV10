import TaskList from "../component/TaskList";
import {Task} from "../data/init-data";
import {useEffect, useState} from "react";
import './Tasks.css';

const Tasks = () => {
    // TODO: 2.	Upravte zdrojový kód tak aby po stisknutí tlačítka „Přihlásit se“ v komponentně Header.tsx se aktualizoval stav i v komponentě Task.tsx a zobrazil tasky z backendu.
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const [tasks, setTasks] = useState<Task[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(false);

    useEffect(() => {
        console.log(`State changed in ${Tasks.name}: ${isLoggedIn}`);

        if (isLoggedIn) {
            setLoading(true);
            fetchData();
        }
    }, [isLoggedIn]);

    const fetchData = async () => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL;
        let response = null;

        try {
            response = await fetch(`${backendUrl}/task`);
        } catch (e : any) {
            setError(e.message);
            setTasks([]);
        }

        setLoading(false);
        if (response && response.ok) {
            const tasks = await response.json();
            setTasks(tasks);
        }
    };

    return <div className="tasks">
        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div className="alert alert-danger">loading</div>}
        <TaskList tasks={tasks} />
    </div>
};

export default Tasks;