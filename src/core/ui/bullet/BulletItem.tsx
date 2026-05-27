import { parseBulletText } from '@/features/plans/utils/parseBulletText'

interface BulletItemProps {
  text: string
}

export const BulletItem = ({ text }: BulletItemProps) => {
  const { bold, rest } = parseBulletText(text)

  return (
    <li className="flex items-start gap-2 text-sm leading-7 text-gray-700">
      <span className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-black-100" />
      <span>
        <strong className="font-semibold text-black-100">{bold}</strong>
        {rest}
      </span>
    </li>
  )
}
