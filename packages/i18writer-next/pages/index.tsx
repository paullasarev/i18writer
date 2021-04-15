import Image from 'next/image'

export default function Home() {
  return (
    <ion-list>
        {new Array(4).fill('').map((k, i) => (
            <ion-card key={i}>
              <Image
                src="/cat.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <ion-card-header>
                <ion-card-subtitle>Destination</ion-card-subtitle>
                <ion-card-title>Madison, WI</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-icon name="pin" slot="start"></ion-icon>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
            </ion-card>
        ))}
    </ion-list>
  )
}
