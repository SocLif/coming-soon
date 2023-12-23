import BrandSloganStack from "@/components/brand-slogan-stack";
import ExploreButton from "@/components/explore-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center align-middle items-center flex-col gap-8 m-auto">
      <Link href={"/"}>
        <BrandSloganStack className="w-full max-w-xs md:max-w-lg px-2 md:h-36" />
      </Link>
      <h1 className="md:text-3xl text-2xl font-bold text-secondary absolute opacity-0 bottom-0">
        Elevate Your Social Hub with Soclif
      </h1>
      <p className="text-base text-bw max-w-md md:max-w-3xl font-light text-center">
        Showcase your links, content, and collaborations effortlessly on one
        platform. Sign up now to amplify your social presence, connect with
        influence&apos;s, and embark on a journey of endless opportunities
      </p>
      <ExploreButton />

      <div className="flex justify-center align-middle items-center flex-col gap-2 bg-secondary text-secondary-foreground px-4 py-6 max-w-md md:max-w-3xl ">
        <h3 className="md:text-3xl text-2xl border-b-2 border-primary m-2 border-spacing-96 text-primary">
          WE&apos;RE COMING SOON
        </h3>
        <p className="text-base text-bw font-light text-center">
          Welcome to soclif.com, your future hub for revolutionary connections
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
                business, or a curious user, soclif.com is where seamless
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
              the unveiling of soclif.com on our launch day.
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
        <div className="flex flex-col w-full gap-0 justify-center align-middle items-center text-lg text-center font-light">
          {/* <h5>Connect with Us:</h5>
            <p>
              📧 Contact Us: Have questions or eager to collaborate? Reach out
              to us at info@soclif.com.
            </p> */}
          <p className="text-base text-bw max-w-md font-light mt-2 text-center">
            Thank you for your anticipation! soclif.com is on the brink of
            transforming your social experience.
          </p>
          <p className="text-base text-bw max-w-md font-light mt-2 text-center">
            <span>See you at the launch!</span>{" "}
            <span>- The soclif.com Team</span>
          </p>
        </div>
      </div>
    </div>
  );
}
