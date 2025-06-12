import { Card, CardContent } from "@/components/ui/card"
import { FaFireAlt } from "react-icons/fa"
import { GiHeartWings } from "react-icons/gi"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-10 blur-2xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-pink-100 dark:bg-pink-800 rounded-full opacity-10 blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start px-4 py-20">

        {/* Left Text Section */}
        <div className="md:col-span-2 space-y-6 text-lg leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">About Us</h2>
          <p>
            Building a people who will be comfortable connecting and reconnecting with God — and
            uncomfortable staying the same. We're committed to creating a spiritual home where
            transformation is not only expected, but embraced.
          </p>
          <p>
            The name “Expectation” signifies the <strong>hope of encountering Christ</strong> — a divine promise that
            all who walk into this space will experience His supernatural presence, no matter their
            background or beliefs.
          </p>
          <p>
            We welcome every person’s journey with open arms, while also challenging one another to grow,
            stretch, and rise. Discomfort is the soil in which transformation blooms, and we believe in
            nurturing that growth through the Word, worship, and community.
          </p>
        </div>

        {/* Right (Vision Cards) */}
        <div className="space-y-6">
          <Card className="shadow-md hover:shadow-lg transition bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg border-0">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                <FaFireAlt className="text-2xl" />
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Building an end-time army of God — fearless, bold, and unmoved by religious or societal
                opposition.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition bg-white/80 dark:bg-gray-900/60 backdrop-blur-lg border-0">
            <CardContent className="p-5 space-y-2">
              <div className="flex items-center gap-3 text-yellow-600 dark:text-yellow-300">
                <GiHeartWings className="text-2xl" />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                To connect with God and demonstrate His power to the world — living in preparation
                for His glorious return.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section Divider */}
      <hr className="my-10 border-gray-300 dark:border-gray-700" />

      {/* Final Encouragement */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-4 pb-20">
        <h3 className="text-2xl font-bold">Join the Movement</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Expectation Ministries isn’t just a church — it's a movement of people discovering
          their purpose, empowered by God’s presence. Whether you're new to faith or rekindling your
          spiritual journey, there's a place for you here.
        </p>
      </div>
    </section>
  )
}
