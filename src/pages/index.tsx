import Link from "next/link";

export default function Invitado() {
    return (
        <>
            <nav>
                <Link href="/Registrar">Registrar Guerrero Z</Link><br />
                <Link href="/Datos">Datos Guerrero Z</Link><br />
                <Link href="/Login">Administrador</Link><br />
            </nav>
            <h1>Bienvenidos Invitado a un FanPage de Dragon ball Z</h1><br />

            <section>
                <h2>Historia</h2><br />
                <p>
                    "Dragon Ball" es una serie de manga y anime creada por Akira Toriyama. La historia sigue a Goku, un joven con una cola de mono y una fuerza sobrehumana, en su búsqueda de las Dragon Balls, siete esferas mágicas que, al reunirse, convocan a un dragón que concede deseos. A lo largo de la serie, Goku se enfrenta a diversos enemigos, entrena para mejorar sus habilidades y forma amistades con otros personajes, como Bulma, Krillin y Vegeta. La serie se divide en varias etapas: "Dragon Ball", "Dragon Ball Z", "Dragon Ball Super" y "Dragon Ball GT", cada una con sus propias aventuras y personajes. La saga es famosa por sus intensas batallas, transformaciones y un vasto universo de personajes.
                </p>
            </section>

            <section>
                <h2>Personajes</h2><br />
                <ol>
                    <li><strong>Goku (Kakarotto):</strong> Goku es un saiyajin que llega a la Tierra y se dedica a defenderla de un montón de personajes malignos.<br /></li>
                    <li><strong>Vegeta:</strong> Vegeta es el príncipe de una raza guerrera extraterrestre conocida como los Saiyajin. Es extremadamente arrogante, orgulloso y trabajador; constantemente se refiere a su herencia y estatus real a lo largo de la serie.<br /></li>
                    <li><strong>Broly:</strong> Broly es descrito como un saiyajin de corazón puro, sin embargo su padre Paragus, siempre culpo al rey vegeta de su exilio, de modo que Broly también guardo cierto resentimiento hacia la familia real; Broly es un hombre amable pero posee una transformación especial con la que es capaz de liberar el poder de un Ozaru<br /></li>
                    <li><strong>Frezzer:</strong> Fue el primer gran enemigo de Son Goku en su etapa adulta, seguido de Cell y Majin Boo. Freezer es ampliamente considerado el antagonista más emblemático de la serie debido a servir efectivamente como el catalizador de muchos de los acontecimientos descritos en la historia.<br /></li>
                    <li><strong>Cell:</strong> es un bioandroide creado por la computadora del Dr. Gero, quien vino del futuro de la línea 3 con la intención de vengarse de Goku por haber acabado con el Ejército del Listón Rojo, y con ello el sueño de todo villano: dominar el mundo.<br /></li>
                    <li><strong>Majin Buu:</strong> Es el último gran enemigo al que se enfrentan los héroes en Dragon Ball Z, un espíritu hecho de la maldad del universo de color rosado con poderes mágicos, entre los cuales están convertir a quien quiera en dulce o curación y habilidades como regenerarse casi de forma infinita y absorber personas<br /></li>
                </ol>
            </section>

            <section>
                <h2>Creador de Dragon Ball</h2>
                <p><strong>Akira Toriyama:</strong> fue un mangaka y diseñador de personajes japonés. Primero alcanzó reconocimiento popular tras crear la serie de manga Dr. Slump, y actuar como diseñador de personajes para videojuegos.</p>
                <p><strong>Nacimiento:</strong> 5 de abril de 1955, Nagoya, Prefectura de Aichi, Japón<br /></p>
                <p><strong>Fallecimiento:</strong> 1 de marzo de 2024, Japón.<br /></p>
            </section>

            <footer>
                <center><p>Síguenos en nuestras redes sociales</p></center>
                <ul>
                    <center><a href="https://www.instagram.com/dragonballsuper/?hl=es">Instagram</a></center>
                    <center><a href="https://twitter.com/DB_official_en?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a></center>
                    <center><a href="https://www.facebook.com/DragonBallZ/?locale=es_LA">Facebook</a></center>
                </ul>
            </footer>
        </>
    );
}