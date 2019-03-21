import { Component, OnInit } from '@angular/core';
import { Track, Item } from '../models/track.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('pinUnpin', [
      state('pin', style({
          transform: 'rotate(0deg)',
      })),
      state('unpin', style({
          transform: 'rotate(90deg)',
      })),
      transition('pin => unpin', animate('300ms ease-in-out')),
      transition('unpin => pin', animate('300ms ease-in-out'))
    ]),
    ]
})
export class MainComponent implements OnInit {

  tracks: Track[];

  ngOnInit() {
    this.tracks = [
      {
        title: 'one',
        id: 'one',
        items: [
          {
          title: 'ID Card',
          description: 'This is the student ID and says a lot of important stuff',
          id: 'one'
        },
        {
          title: 'Courses',
          description: 'These are my courses and they are breaking my back...',
          id: 'two'
        },
        {
          title: 'Personal Progress',
          description: 'This is my personal progress, and I am a super rockstar',
          id: 'three'
        },
        {
          title: 'Financial Services',
          description: 'This is info about my financial services and borrowing',
          id: 'four'
        }
        ],
      },
      {
        title: 'two',
        id: 'two',
        items: [
          {
            title: 'Success Centers',
            description: 'This is where I turn to find success if I am struggling',
            id: 'five'
          },
          {
            title: 'Student Support',
            description: 'This is where I can find support from the WGU teams',
            id: 'six'
          },
          {
            title: 'Mentor',
            description: 'This is info about my mentor, who is now my best friend',
            id: 'seven'
          },
          {
            title: 'Commons',
            description: 'This is the commons area where so much can be found',
            id: 'eight'
          }
        ]
      }
    ];
  }

    /**
   * An array of all track ids. Each id is associated with a `cdkDropList` for the
   * track talks. This property can be used to connect all drop lists together.
   */
  get trackIds(): string[] {
    return this.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Item[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given item to the target data array. This happens if
    // an item has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
