import Link from 'next/link';
import styles from './AboutUsView.module.css'

const AboutUsView = () => {
    return (<div className={styles.container}>
        <p>This is a site developed by <Link href='https://github.com/omar-ebrahim' target='_blank'>Omar Ebrahim</Link></p>
        <p>I am a full-stack developer with experience in .NET and more recently with Next.JS, React and Typescript</p>
        <p>See <Link href="https://coffeefuelled.tech" target='_blank'>my website</Link> for more projects</p>
    </div>);
}

export default AboutUsView;