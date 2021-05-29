import React from 'react'
import '../App.css'
import { DeviceCard } from './servicesCards/'
import devices from '../data.json'

export default function Services() {
    return (
        <main>
            {devices.map(device => (
                <DeviceCard classes='mr' key={`${device.id}`}>
                    <DeviceCard.Image src={device.image} alt={device.title} />
                    <DeviceCard.Body>
                        <DeviceCard.Title>{device.title}</DeviceCard.Title>
                        <DeviceCard.Text>{device.desc}</DeviceCard.Text>
                        <DeviceCard.Button>{device.ctaText}</DeviceCard.Button>
                    </DeviceCard.Body>
                </DeviceCard>
            ))}
        </main>
    )
}
