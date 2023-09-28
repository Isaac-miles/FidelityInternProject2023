import Link from 'next/link'
import React from 'react'
import styles from './mainFooter.module.css'

export default function MainFooter() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.content}>
                <li>
                    <Link href="/">Terms & Conditions</Link>
                </li>

                <li>
                    <span>|</span>
                </li>

                <li>
                    <Link href="/">Contact Us</Link>
                </li>

                <li>
                    <span>|</span>
                </li>

                <li>
                    <Link href="/">Privacy Policy</Link>
                </li>

                <li>
                    <span>|</span>
                </li>

                <li>
                    <Link href="/">Branch Locator</Link>
                </li>

                <li>
                    <span>|</span>
                </li>

                <li>
                    <Link href="/">FAQs</Link>
                </li>

                <li>
                    <span>|</span>
                </li>

                <li>
                    <Link href="/">Corporate Registration</Link>
                </li>
            </ul>
        </footer>
    );
}