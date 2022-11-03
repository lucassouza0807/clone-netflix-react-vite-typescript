import spin_loading from "@assets/spin.svg";

export default function Loading() {
    return (
        <div className="loading">
            <div className="loading-spin">
                <img src={spin_loading} alt="Loading spin" />
            </div>
        </div>

    )
} 