import Header from "@/components/atoms/header/header";
import styles from "./page.module.css";
import RankingBox from "@/components/atoms/ranking_box/ranking_box";

export default function Home() {
  return (
    <div >
      <Header />
      <div style={{ marginTop: '50px' }}></div>
      <div style={{width: '300px', marginLeft: '20px'}}>
        <RankingBox name="F. Scalco" position={1} points={20} />
      </div>

    </div>
  );
}
