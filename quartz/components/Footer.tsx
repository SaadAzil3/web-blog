import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
  const year = new Date().getFullYear()
  const links = {
    "LinkedIn": "https://www.linkedin.com/in/saadazil/",
    "GitHub": "https://github.com/SaadAzil3",
    // Add more links as needed
  }
  return (
    <footer class={`${displayClass ?? ""}`}>
      <p>
        {i18n(cfg.locale).components.footer.createdWith}{" "}
        <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
      </p>
      <ul>
        {Object.entries(links).map(([text, link]) => (
          <li>
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

Footer.css = style
export default Footer satisfies QuartzComponentConstructor

