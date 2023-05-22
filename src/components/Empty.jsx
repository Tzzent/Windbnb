import Head from "./modals/NavModal/Head";

export default function Empty() {
  return (
    <div className="flex justify-center h-60 items-center text-center">
      <Head
        title="Empty data!"
        titleColor="#EB5757"
        subtitle="It looks like there are no stays, please change your search"
      />
    </div>
  )
}
