import { LoaderFunction, redirect } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  return redirect('/home')
}

// export default function Index() {
//   return (
//     <div className="h-screen w-full bg-slate-600">
//       <h2 className="font-bol text-5xl text-blue-400">It works!</h2>
//     </div>
//   );
// }