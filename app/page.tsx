import { HomePage } from "@/features/home/ui/home-page";
export default function Home() {
    // const [inventory, setInventory] = useState<any>();
    // const steamId = useAppSelector((state) => state.auth.value?.steamid);

    // const isLoading = useAppSelector(state => state.auth.isLoading)

    // useEffect(() => {
    //     async function fetchInventory() {
    //         try {
    //             const inventory = await getInventory();
    //             setInventory(inventory);
    //         } catch (error) {
    //             const err = error as Error;
    //         }
    //     }
    //     fetchInventory();
    // }, [steamId]);

    // if (isLoading) return <PreloaderAuthentication/>

    return (
        <>
            <HomePage />
        </>
    );
}
