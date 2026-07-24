
"use client"

import React, { useState, useEffect } from 'react'
import { akupresuraSchedule, getNextCourseDate, type CourseDate } from '@/data/courseSchedules'

interface CountdownBadgeProps {
  courseSchedule?: CourseDate[]
}

const CountdownBadge = ({ courseSchedule = akupresuraSchedule }: CountdownBadgeProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })
  const [nextCourse, setNextCourse] = useState<CourseDate | null>(null)

  useEffect(() => {
    // Get next course date
    const course = getNextCourseDate(courseSchedule)
    setNextCourse(course)
  }, [courseSchedule])

  useEffect(() => {
    if (!nextCourse) return

    const targetDate = new Date(nextCourse.startDate)

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        
        setTimeLeft({ days, hours, minutes })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [nextCourse])

  if (!nextCourse) {
    return (
      <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200/50 px-5 py-2.5 text-sm font-medium text-gray-600 shadow-lg backdrop-blur-sm">
        <span className="font-semibold">Nema zakazanih termina</span>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 px-5 py-2.5 text-sm font-medium text-orange-700 shadow-lg shadow-orange-100/50 backdrop-blur-sm">
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20">
        <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <span className="font-semibold">
        Sljedeći tečaj ({nextCourse.city}) počinje za: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </span>
    </div>
  )
}

export default CountdownBadge
