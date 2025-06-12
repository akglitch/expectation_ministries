import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SpeakerIcon, MaximizeIcon, PlayIcon } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full px-4 py-10 bg-gradient-to-b from-rose-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Welcome Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-700 dark:text-rose-300">
          Welcome home: Discover Expectation Ministries
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Join us for worship, fellowship, and growth.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Visit us this and every Sunday
        </p>

        {/* Sermon Player */}
        <div className="w-full max-w-2xl mx-auto pt-6">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Watch Latest Sermon by Rev Eric Kwayis
          </p>
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 shadow-sm bg-white dark:bg-gray-800">
            <Button size="icon" variant="ghost">
              <PlayIcon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
            </Button>
            <div className="flex-1 bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
              <div className="bg-rose-500 h-2 w-1/3 rounded-full" />
            </div>
            <Button size="icon" variant="ghost">
              <SpeakerIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            </Button>
            <Button size="icon" variant="ghost">
              <MaximizeIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Service Times & Location */}
      <div className="space-y-6 mt-16 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            SERVICE TIMES & LOCATION
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Join Us This Week</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {/* Service Times Card */}
          <Card className="bg-white dark:bg-gray-800 border-rose-100 dark:border-rose-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-rose-700 dark:text-rose-300 mb-2">
                SERVICE TIMES:
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                SUNDAY WORSHIP: 11:00 AM <br />
                EVENING PRAYERS: DAY AND TIME
              </p>
            </CardContent>
          </Card>

          {/* Address Card */}
          <Card className="bg-white dark:bg-gray-800 border-rose-100 dark:border-rose-900 shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-rose-700 dark:text-rose-300 mb-2">
                ADDRESS:
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                LUESSUMER STRASSE 105, <br />
                28779, BREMEN GERMANY
              </p>
            </CardContent>
          </Card>

          {/* Google Map */}
          <Card className="overflow-hidden shadow-sm border-rose-100 dark:border-rose-900">
             <CardContent className="p-0 h-full">
    <iframe
      title="Church Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.188848052875!2d8.583989476632803!3d53.17680497993439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b111cd1b727d5d%3A0x8e87d631c8459ab3!2sL%C3%BCssumer%20Stra%C3%9Fe%20105%2C%2028779%20Bremen%2C%20Germany!5e0!3m2!1sen!2sde!4v1718200030000!5m2!1sen!2sde"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      className="w-full h-full rounded-md border-0"
    />
  </CardContent>

          </Card>
        </div>
      </div>
    </section>
  )
}
