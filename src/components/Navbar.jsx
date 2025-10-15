import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<span className="navbar-brand mb-0 h1 ms-5">Ayelen Lecman</span>
				<div className="ml-auto d-flex gap-2">
					<a
						href="https://www.linkedin.com/in/ayelecman/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="btn btn-primary">
							<i className="fab fa-linkedin me-2"></i>
							LinkedIn
						</button>
					</a>

					<a
						href="/Ayelen Lecman. Full Stack Developer.pdf"
						download="Ayelen Lecman. Full Stack Developer.pdf"
					>
						<button className="btn btn-outline-light">
							<i className="fa-solid fa-file-arrow-down me-2"></i>
							Descargar CV
						</button>
					</a>

					<a
						href="https://github.com/AyeLec"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="btn btn-dark">
							<i className="fab fa-github me-2"></i>
							GitHub
						</button>
					</a>
				</div>
			</div>
		</nav>
	);
};