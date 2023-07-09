import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}> 
                <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt="" className={styles.img} />
            <div className={styles.imgText}>
                <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                <h2 className={styles.imgDesc}>Handcrafting award wining digital experiences</h2>
            </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id autem voluptatum perspiciatis odit est nobis architecto ducimus blanditiis fugit quod molestias, distinctio placeat omnis, vel maiores repellat atque. Nulla distinctio ducimus totam a iusto ea tempora minima eligendi! Vero quae dolorem eos repellat. Quisquam assumenda incidunt mollitia temporibus iure quo possimus ducimus cupiditate culpa voluptas voluptatibus <br /> tenetur voluptatum aliquam modi maxime deserunt praesentium minus deleniti labore officiis exercitationem quia eum, dignissimos fugit! Ex, facere? Iusto, enim itaque. Facere, aliquid voluptatem nisi, rerum, quas culpa vel repudiandae aliquam <br /> dicta quaerat optio aut accusamus? Harum possimus illo, facilis consequatur nisi ipsam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestias consequatur vitae nihil incidunt repellat reiciendis quos dolores beatae nulla saepe optio sunt neque in a officia consequuntur asperiores odio officiis cupiditate explicabo perferendis animi quasi veniam! Suscipit, id? Animi repellat, officia officiis ad ipsa optio dignissimos maiores excepturi doloribus?</p>
                </div>

                <div className={styles.item}>
                <h1 className={styles.title}>What We Do?</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem adipisci dolorum a et mollitia, in illo natus, nobis optio necessitatibus ab labore vel? Harum ex, alias similique eligendi quo aliquid sit quis quae sapiente est suscipit cum. Atque similique impedit ex quibusdam saepe dicta aliquam veritatis sequi <br /> <br /> 
                Dynamic Websites <br /><br />
                Fast and Handy <br /><br />
                Mobile Apps<br />
                </p>
                <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;