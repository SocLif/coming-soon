export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-4 py-8 max-w-4xl min-h-screen h-full m-auto align-middle select-none">
      <div className="flex justify-center align-middle items-center flex-col gap-12 m-auto">
        <h1 className="m-4 font-mono text-7xl md:text-9xl p-3 md:p-4 rounded-lg my-bg text-black">
          SocLif
        </h1>
        <div className="flex justify-center align-middle items-center flex-col gap-5">
          <h3 className="md:text-5xl text-2xl border-b-2 border-slate-500 p-4 border-spacing-96">
            WE&apos;RE COMING SOON
          </h3>
          <p className="text-lg text-center">
            Welcome to SocLif.com, your future hub for revolutionary connections
            in the world of social media. We&apos;re in the midst of crafting a
            space where influencers, businesses, and users come together to
            redefine social interactions.
          </p>
          {/* <div className="flex flex-col w-full gap-2">
            <h6 className="text-lg font-serif font-semibold">
              What Awaits You:
            </h6>
            <ul>
              <li>
                🌟 Innovative Platform: Discover an innovative platform where
                identities merge, connections thrive, and possibilities unfold.
              </li>
              <li>
                🚀 Seamless Networking: Whether you're an influencer, a
                business, or a curious user, SocLif.com is where seamless
                networking meets limitless possibilities.
              </li>
              <li>
                🌐 Boundless Connections: Immerse yourself in a world of
                boundless connections, where collaboration is not just a feature
                but a way of life.
              </li>
            </ul>
          </div> */}
          {/* <p>Stay Informed:</p>
          <ul>
            <li>
              📅 Launch Date: The countdown has begun. Be prepared to witness
              the unveiling of SocLif.com on our launch day.
            </li>
            <li>
              💌 Exclusive Updates: Sign up now to receive exclusive updates,
              early access opportunities, and a sneak peek into the future of
              social connectivity.
            </li>
            <li>
              🎁 Sneak Peeks: Follow us on social media for exclusive sneak
              peeks and behind-the-scenes glimpses.
            </li>
          </ul> */}
          <div className="flex flex-col w-full gap-2 justify-center align-middle items-center text-lg text-center">
            {/* <h5>Connect with Us:</h5>
            <p>
              📧 Contact Us: Have questions or eager to collaborate? Reach out
              to us at info@SocLif.com.
            </p> */}
            <p>
              Thank you for your anticipation! SocLif.com is on the brink of
              transforming your social experience.
            </p>
            <p>See you at the launch!</p>
            <p>- The SocLif.com Team</p>
          </div>
        </div>
      </div>
    </main>
  );
}
