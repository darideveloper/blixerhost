"use client"

// Components
import { FaQuestionCircle } from "react-icons/fa"
import ButtonAction from "@/components/ui/ButtonAction"
import ButtonLink from "@/components/ui/ButtonLink"
import DetailsCard from "@/components/ui/DetailsCard"
import Title from "@/components/ui/Title"


export default function Faqs() {

  const [currentCategory, setCurrentCategory] = useState("Category 1")

  const faqsData = {
    "Category 1": [
      {
        "title": "Question 1",
        "answer": "Answer 1",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 2",
        "answer": "Answer 2",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 3",
        "answer": "Answer 3",
        "icon": FaQuestionCircle
      }
    ],
    "Category 2": [
      {
        "title": "Question 4",
        "answer": "Answer 4",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 5",
        "answer": "Answer 5",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 6",
        "answer": "Answer 6",
        "icon": FaQuestionCircle
      }
    ],
    "Category 3": [
      {
        "title": "Question 7",
        "answer": "Answer 7",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 8",
        "answer": "Answer 8",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 9",
        "answer": "Answer 9",
        "icon": FaQuestionCircle
      }
    ],
    "Category 4": [
      {
        "title": "Question 10",
        "answer": "Answer 10",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 11",
        "answer": "Answer 11",
        "icon": FaQuestionCircle
      },
      {
        "title": "Question 12",
        "answer": "Answer 12",
        "icon": FaQuestionCircle
      }
    ]
  }

  return (
    <section
      className={`
        faqs
        container
        mx-auto
      `}
    >

      <div
        className={`
          left
        `}
      >
        <Title />
          
        <div
          className={`
            buttons
          `}
        >
          {/* Render ButtonAction */}
          {
            faqsData.object.keys().map((category, index) => (
              <ButtonAction
                className={`
                  category-btn
                `}
                key={index}
              >
                {category}
              </ButtonAction>
            ))
          }
        </div>

        <p
          className={`
            text
          `}
        >
          Replace me
        </p>


        <ButtonLink
          className={`
            cta
          `}
        >
          ButtonLink
        </ButtonLink>
      </div>


      <div
        className={`
          right
          faqs-wrapper
        `}
      >
        {
          faqsData[currentCategory].map((faq, index) => (
            <DetailsCard>

            </DetailsCard>
          ))
        }

      </div>

    </section>
  )
}