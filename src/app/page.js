import Head from 'next/head'
import Link from 'next/link'
//import styles from './layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Palkar Business Directory</title>
		<meta name="description" content="Sourashtra Business Directory, All in one page for Palkars "/>
  		<meta name="keywords" content="palkarone, palkar.one, sourashtra directory, palkar directory, palkar one, palkar businesses, palkar websites"/>
  		<meta name="author" content="Palkar One"/>
      </Head>
      <div>
        <h2 >Namaskar</h2>
			<h3>What</h3>
			<p>
				Our idea is to build a sourashtra business directory and connect
				people to grow as a community. Our community has lots of small
				businesses and entrepreneurs having the same potential to render
				services/products as in market standards. A small support will
				always help.
			</p>
			<li>
				This will be a directory of various services provided only
				by sourashtra people.
			</li>
			<li>
				All the registered users will be manually verified on
				call/inperson on their available time and then only be
				listed in the site.
			</li>
			<li>
				Note: This platform only connects the sourashtra/palkar services to outside world and 
				doesn't provide that service on its own for now. 
			</li>
			<h3>How</h3>
			<li>
				To search a listing, we can type in like "Caterings in madurai", "Prohitars in chennai". etc
				The <Link href="/search">search page</Link> has filters like locations and categories. 
			</li>
			<li>
				To register a new listing, A form to be filled in <Link href="/register">here.</Link>
			</li>
			<li>
				To modify an existing listing, contact <Link href="/contactus">palkar.one</Link> team as we dont support logins for now.
			</li>
			<li>
				To view status of an existing listing, click <Link href="/register?status=true">here</Link>.
			</li>
			<li>
				For any suggestions/complaints, we have a <Link href="/suggestions">form</Link>.
				Suggestions can also be like adding a category for your listing, feature etc.
			</li>
			<li>
				At any point of time, Click Palkar.one for home page.
			</li>
			<h3>Why</h3>
			<li>
				We dont have an effective all in one website. 
				palkar.one would be all in one for palkars.
			</li>
			<li>
				We wanted an easy and simple to use application. 
			</li>
			<li>
				Provide SEO options for small businesses who cannot have their own website.
			</li>
			<h3>Future</h3>
			<li>
				Eventually palkar.one will be adding various <Link href="/future" >other features</Link>. 
			</li>
			<h4><Link href="/othersites">Some other popular sourashtra websites</Link></h4>
			<p>Note: This site is still under development.<br></br><Link href="/dev">To know more about devs....</Link></p>
      </div>
    </>
  )
}
