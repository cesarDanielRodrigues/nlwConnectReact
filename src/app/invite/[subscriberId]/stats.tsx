import { BadgeCheck, Medal, MousePointerClick } from "lucide-react";
import { getSubscriberInviteClicksCount, getSubscriberInviteRankingPosition, getSubscriberInvitesCount } from "@/http/api";

interface StatsProps{
  subscriberId: string
}


export async function Stats({subscriberId}:StatsProps){
    const {count: AccessCount} = await getSubscriberInviteClicksCount(subscriberId)
    const {count: AccessInviteCount} = await getSubscriberInvitesCount(subscriberId)
    const {position} = await getSubscriberInviteRankingPosition(subscriberId)

    return(
        <div className="grid gap-3 md:grid-cols-3">
        <div className="relative bg-gray-700 border border-gray-600 px-5 py-7 flex flex-col items-center justify-center rounded-xl">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {AccessCount}
          </span>
          <span className="text-sm text-gray-300 leading-none text-center">
            Acessos ao link
          </span>
          <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
        </div>
        <div className="relative bg-gray-700 border border-gray-600 px-5 py-7 flex flex-col items-center justify-center rounded-xl">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {AccessInviteCount}
          </span>
          <span className="text-sm text-gray-300 leading-none text-center">
            Inscrições feitas
          </span>
          <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
        </div>
        <div className=" relative bg-gray-700 border border-gray-600 px-5 py-7 flex flex-col items-center justify-center rounded-xl">
          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            {position ? `${position}º` : " - "}
          </span>
          <span className="text-sm text-gray-300 leading-none text-center">
            Posição no ranking
          </span>
          <Medal className="size-5 text-purple absolute top-3 left-3" />
        </div>
      </div>
    )
}